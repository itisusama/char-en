import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-3 gap-0">
        <div>Header</div>
        <div><Outlet/></div>
        <div>Footer</div>
      </div>
    </>
  );
}
