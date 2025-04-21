'use client';

import { Linkedin, Twitter, Facebook } from 'lucide-react';

// DoctorProfile Component
const DoctorProfile = ({ doctor }) => {
  if (!doctor) {
    return <div className="text-center text-gray-500">Loading doctor profile...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-2xl mt-10">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Doctor Photo */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#022dbb]">
          <img
            src={doctor?.photo || '/default-profile.png'}
            alt={doctor?.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Doctor Info */}
        <div className="flex-1 space-y-2 text-gray-800">
          <h2 className="text-2xl font-bold text-[#022dbb]">{doctor?.name}</h2>
          <p className="text-sm">
            <span className="font-semibold">Department:</span> {doctor?.department}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Specialist:</span> {doctor?.speciality}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Degrees:</span>{' '}
            {doctor?.educations?.map((edu) => edu.degree).join(', ')}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Email:</span> {doctor?.contact?.email}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Phone:</span> {doctor?.contact?.phone}
          </p>

          {/* Social Links */}
          {doctor?.contact?.socialMedia && (
            <div className="flex gap-4 mt-3 text-[#022dbb]">
              {doctor.contact.socialMedia.linkedin && (
                <a href={doctor.contact.socialMedia.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-5 h-5 hover:text-blue-700" />
                </a>
              )}
              {doctor.contact.socialMedia.twitter && (
                <a href={doctor.contact.socialMedia.twitter} target="_blank" rel="noreferrer">
                  <Twitter className="w-5 h-5 hover:text-blue-500" />
                </a>
              )}
              {doctor.contact.socialMedia.facebook && (
                <a href={doctor.contact.socialMedia.facebook} target="_blank" rel="noreferrer">
                  <Facebook className="w-5 h-5 hover:text-blue-600" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Dummy doctor data for preview
const doctors = {
  name: 'Dr. Tasmina Rahman',
  department: 'Cardiology',
  speciality: 'Heart Specialist',
  photo: '/doctor.jpg',
  educations: [{ degree: 'MBBS' }, { degree: 'FCPS' }, { degree: 'MD (Cardiology)' }],
  contact: {
    email: 'tasmina@example.com',
    phone: '01700000000',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/tasmina',
      twitter: 'https://twitter.com/tasmina',
      facebook: 'https://facebook.com/tasmina',
    },
  },
};

// Page Component
export default function Page() {
  return <DoctorProfile doctor={doctors} />;
}
