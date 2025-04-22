import React from 'react'

export default function page() {
  return (
    <div>
      <Card className="p-4 mt-6 shadow-xl rounded-2xl bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Appointment List</h2>
        {loading ? (
          <div className="grid grid-cols-1 gap-4">
            {[...Array(5)].map((_, index) => (
              <Skeleton key={index} className="h-12 w-full" />
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Doctor</TableHead>
                  {/* <TableHead>Date</TableHead> */}
                  {/* <TableHead>Time</TableHead> */}
                  <TableHead>Type</TableHead>
                  <TableHead>Fees</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment._id}>
                    <TableCell className="flex items-center gap-3">
                      <Image
                        src={appointment.image || "https://via.placeholder.com/40"}
                        alt={appointment.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold">{appointment.name}</div>
                        <div className="text-xs text-gray-500">{appointment.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{appointment.doctor}</TableCell>
                    {/* <TableCell>{appointment.date}</TableCell> */}
                    {/* <TableCell>{appointment.time}</TableCell> */}
                    <TableCell>{appointment.type}</TableCell>
                    <TableCell>${appointment.fees}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>
    </div>
  );
}
