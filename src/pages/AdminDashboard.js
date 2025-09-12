import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const PAGE_SIZE = 10;

const VIEWS = ['Dashboard', 'Deleted', 'Archived', 'View All'];
const STATUS_MAP = {
  'Dashboard': 'active',
  'Deleted': 'deleted',
  'Archived': 'archived',
  'View All': 'all',
};
const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [view, setView] = useState('Dashboard');
  const navigate = useNavigate();

  // Fetch submissions from backend based on view
  const fetchSubmissions = async (status) => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/submissions?status=${status}`);
      setSubmissions(res.data);
    } catch (err) {
      setSubmissions([]);
      console.error('Error fetching submissions:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSubmissions(STATUS_MAP[view]);
    // eslint-disable-next-line
  }, [view]);

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    navigate('/admin');
  };


  // Filter by search only (status is handled by backend)
  const searchFilter = (item) =>
    item.name?.toLowerCase().includes(search.toLowerCase()) ||
    item.phone?.toLowerCase().includes(search.toLowerCase()) ||
    item.email?.toLowerCase().includes(search.toLowerCase()) ||
    item.organization?.toLowerCase().includes(search.toLowerCase()) ||
    item.message?.toLowerCase().includes(search.toLowerCase()) ||
    item.submitted_at?.toLowerCase().includes(search.toLowerCase());

  const filteredSubmissions = submissions.filter(searchFilter);

  // Pagination logic
  const totalPages = Math.ceil(filteredSubmissions.length / PAGE_SIZE);
  const paginatedSubmissions = filteredSubmissions.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  useEffect(() => {
    setPage(1); // Reset to first page on search change
  }, [search]);

  if (loading) return <div className="admin-dashboard-container">Loading...</div>;

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-header">
        <h2 className="admin-dashboard-title">Client Submissions</h2>
        <button className="admin-dashboard-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="admin-dashboard-navbtns" style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
        {VIEWS.map(v => (
          <button
            key={v}
            className={view === v ? 'admin-dashboard-navbtn active' : 'admin-dashboard-navbtn'}
            style={{
              background: view === v ? '#3c94e1' : '#eaf4fb',
              color: view === v ? '#fff' : '#15396a',
              fontWeight: 700,
              border: 'none',
              borderRadius: 8,
              padding: '8px 18px',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: view === v ? '0 2px 8px rgba(60,148,225,0.10)' : 'none',
              outline: view === v ? '2px solid #3c94e1' : 'none',
              transition: 'all 0.15s'
            }}
            onClick={() => setView(v)}
          >
            {v}
          </button>
        ))}
      </div>
      <div className="admin-dashboard-searchbar">
        <input
          type="text"
          placeholder="Search by name or phone..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {paginatedSubmissions.length === 0 ? (
        <div className="admin-dashboard-empty">No submissions found.</div>
      ) : (
        <>
          <table className="admin-dashboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Organization</th>
                <th>Message</th>
                <th>Submitted At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedSubmissions.map((item, index) => (
                <MessageRow
                  key={item.id || index}
                  item={item}
                  view={view}
                  refresh={() => fetchSubmissions(STATUS_MAP[view])}
                />
              ))}
            </tbody>
          </table>
          <div className="admin-dashboard-pagination">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Prev
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};


// MessageRow component for expandable/collapsible message cell


const MessageRow = ({ item, view, refresh }) => {
  const [expanded, setExpanded] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const isLong = item.message && item.message.length > 40;
  const displayMessage = isLong && !expanded
    ? item.message.slice(0, 40) + '...'
    : item.message;
  // Action handlers
  // Backend expects PATCH for status/read updates
  const handleStatus = async (status) => {
    setActionLoading(true);
    try {
      // Optimistically update UI (optional: could update local state here)
      await axios.patch(`http://localhost:5000/api/submissions/${item.id}/status`, { status });
      refresh();
    } catch (err) {
      alert('Failed to update status: ' + (err.response?.data?.message || err.message));
    }
    setActionLoading(false);
  };
  const handleRead = async (read) => {
    setActionLoading(true);
    try {
      // Optimistically update UI (optional: could update local state here)
      await axios.patch(`http://localhost:5000/api/submissions/${item.id}/read`, { read });
      refresh();
    } catch (err) {
      alert('Failed to update read status: ' + (err.response?.data?.message || err.message));
    }
    setActionLoading(false);
  };
  // Determine which buttons to show based on view/status
  let actionButtons = null;
  if (item.status === 'deleted') {
    actionButtons = (
      <button
        onClick={() => handleStatus('active')}
        title="Restore"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#27ae60', fontSize: 20 }}
        disabled={actionLoading}
      >
        <span role="img" aria-label="Restore">↩️</span>
      </button>
    );
  } else if (item.status === 'archived') {
    actionButtons = (
      <button
        onClick={() => handleStatus('active')}
        title="Unarchive"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2980b9', fontSize: 20 }}
        disabled={actionLoading}
      >
        <span role="img" aria-label="Unarchive">📤</span>
      </button>
    );
  } else {
    // active (Dashboard or View All)
    actionButtons = (
      <>
        <button
          onClick={() => handleStatus('deleted')}
          title="Delete"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#c0392b', fontSize: 20 }}
          disabled={actionLoading}
        >
          <span role="img" aria-label="Delete">🗑️</span>
        </button>
        <button
          onClick={() => handleStatus('archived')}
          title="Archive"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2980b9', fontSize: 20 }}
          disabled={actionLoading}
        >
          <span role="img" aria-label="Archive">📦</span>
        </button>
      </>
    );
  }
      return (
        <tr style={item.status_read ? { opacity: 0.5, background: '#f0f0f0' } : {}}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.organization}</td>
      <td style={{ whiteSpace: 'pre-line', position: 'relative' }}>
        {displayMessage}
        {isLong && (
          <button
            onClick={() => setExpanded(e => !e)}
            style={{
              marginLeft: 8,
              background: '#3c94e1',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 24,
              height: 24,
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: 16,
              lineHeight: '24px',
              verticalAlign: 'middle',
              boxShadow: '0 1px 4px rgba(60,148,225,0.10)'
            }}
            aria-label={expanded ? 'Collapse message' : 'Expand message'}
            title={expanded ? 'Collapse' : 'Expand'}
            disabled={actionLoading}
          >
            {expanded ? '-' : '+'}
          </button>
        )}
      </td>
      <td>{new Date(item.submitted_at).toLocaleString()}</td>
      <td style={{ display: 'flex', gap: 8 }}>
        {actionButtons}
            {item.status_read ? (
              <button
                onClick={() => handleRead(false)}
                title="Mark as Unread"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888', fontSize: 20 }}
                disabled={actionLoading}
              >
                <span role="img" aria-label="Unread">↩️</span>
              </button>
            ) : (
              <button
                onClick={() => handleRead(true)}
                title="Mark as Read"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#27ae60', fontSize: 20 }}
                disabled={actionLoading}
              >
                <span role="img" aria-label="Read">✔️</span>
              </button>
            )}
      </td>
    </tr>
  );
};

export default AdminDashboard;
