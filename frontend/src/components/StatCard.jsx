import React from 'react';

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className={`stat-icon-bg ${color}`}>
          {icon}
        </div>
        <button className="more-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
        </button>
      </div>
      <div className="stat-body">
        <p className="stat-title">{title}</p>
        <h3 className="stat-value">{value}</h3>
      </div>

      <style jsx>{`
        .stat-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          padding: 24px;
          border: 1px solid var(--border);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .stat-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .stat-icon-bg {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon-bg.blue { background: #eff6ff; color: #3b82f6; }
        .stat-icon-bg.purple { background: #f5f3ff; color: #8b5cf6; }
        .stat-icon-bg.orange { background: #fff7ed; color: #f97316; }
        .stat-icon-bg.green { background: #f0fdf4; color: #22c55e; }

        .more-btn {
          background: none;
          color: var(--text-muted);
          padding: 4px;
        }

        .stat-title {
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 4px;
        }

        .stat-value {
          font-size: 24px;
          font-weight: 700;
          color: var(--text);
        }
      `}</style>
    </div>
  );
};

export default StatCard;
