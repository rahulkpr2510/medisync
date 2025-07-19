import { redirect } from "next/navigation";
import { getDoctorsByspeciality } from "@/actions/doctors-listing";
import { DoctorCard } from "../_components/doctor-card";
import { PageHeader } from "@/components/page-header";

export default async function DoctorspecialityPage({ params }) {
  const { speciality } = await params;

  // Redirect to main doctors page if no speciality is provided
  if (!speciality) {
    redirect("/doctors");
  }

  // Fetch doctors by speciality
  const { doctors, error } = await getDoctorsByspeciality(speciality);

  if (error) {
    console.error("Error fetching doctors:", error);
  }

  return (
    <div className="space-y-5">
      <PageHeader
        title={speciality.split("%20").join(" ")}
        backLink="/doctors"
        backLabel="All Specialties"
      />

      {doctors && doctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-white mb-2">
            No doctors available
          </h3>
          <p className="text-muted-foreground">
            There are currently no verified doctors in this speciality. Please
            check back later or choose another speciality.
          </p>
        </div>
      )}
    </div>
  );
}
