import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { doctors } from '../data/doctors';
import DoctorCard from '../components/domain/DoctorCard';
import { Search, X } from 'lucide-react';

function DoctorList() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const specialtyFromUrl = searchParams.get('specialty');
    if (specialtyFromUrl) {
      setSearch(specialtyFromUrl);
    }
  }, [searchParams]);

  const filtered = doctors.filter((doc) => {
    const query = search.toLowerCase();
    return (
      doc.name.toLowerCase().includes(query) ||
      doc.specialty.toLowerCase().includes(query)
    );
  });

  return (
    <div className="section-padding" style={{ background: '#F5F9FF', minHeight: '75vh' }}>
      <div className="container">
        <div className="mb-4">
          <span className="text-eyebrow">Browse Doctors</span>
          <h2 className="mt-2 mb-1">Find Your Doctor</h2>
          <p className="text-muted-custom mb-0">
            {filtered.length} doctor{filtered.length !== 1 ? 's' : ''} available
          </p>
        </div>

        {/* Search Bar */}
        <div className="dl-search-wrap mb-5">
          <Search size={19} className="dl-search-icon" />
          <input
            type="text"
            placeholder="Search by doctor name or specialty..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="dl-search-input"
          />
          {search && (
            <button className="dl-clear-btn" onClick={() => setSearch('')} aria-label="Clear search">
              <X size={16} />
            </button>
          )}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted-custom">No doctors found matching your search.</p>
          </div>
        ) : (
          <div className="row g-4">
            {filtered.map((doc) => (
              <div key={doc.id} className="col-sm-6 col-lg-4">
                <DoctorCard doctor={doc} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorList;