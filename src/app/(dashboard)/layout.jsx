

// export default function Layout({ children }) {
//   return (
//     <>

//         <main>{children}</main>

//     </>
//   );
// }



import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { ThemeBtn } from '@/components/shared/ThemeSelector';

export default async function Layout({ children }) {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="">
          {/* <ThemeBtn /> */}
        </div>
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}