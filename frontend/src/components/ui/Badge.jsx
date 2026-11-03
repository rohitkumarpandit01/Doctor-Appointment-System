function Badge({ status }) {
  const config = {
    Confirmed: { bg: '#E9FBEF', color: '#22C55E' },
    Pending: { bg: '#FFF7E6', color: '#F59E0B' },
    Cancelled: { bg: '#FDECEC', color: '#EF4444' },
    Available: { bg: '#E9FBEF', color: '#22C55E' },
    Unavailable: { bg: '#F2F4F7', color: '#667085' },
  };
  const style = config[status] || config.Pending;

  return (
    <span
      className="badge-status"
      style={{ background: style.bg, color: style.color }}
    >
      {status}
    </span>
  );
}

export default Badge;