'use client';

import EditDoctorForm from '@/components/form/EditDoctorForm';
import { useParams } from 'next/navigation';
// other imports...

export default function EditDoctorPage() {
  const params = useParams();
  const doctorId = params?.id;

  return <EditDoctorForm doctorId={doctorId} />;
}
