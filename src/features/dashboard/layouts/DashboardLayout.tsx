import { Outlet } from "react-router";
import { Sidebar } from "@/features/dashboard/components/Sidebar/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="min-w-0 flex-1 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout;
