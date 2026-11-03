function AvailabilityPulse({ available }) {
  return (
    <span className="d-flex align-items-center gap-2">
      <span className={`pulse-dot ${!available ? 'pulse-dot--offline' : ''}`}></span>
      <span style={{ fontSize: '13px', color: available ? '#22C55E' : '#667085', fontWeight: 600 }}>
        {available ? 'Available Today' : 'Not Available'}
      </span>
    </span>
  );
}

export default AvailabilityPulse;