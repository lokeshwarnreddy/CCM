-- Migration: Add status and read columns to Demo table
ALTER TABLE Demo ADD
  status VARCHAR(20) NOT NULL DEFAULT 'active',
  read BIT NOT NULL DEFAULT 0;
