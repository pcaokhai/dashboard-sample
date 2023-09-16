import Shell from "../components/Shell";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {


  return (
    <div>
      <Shell>{children}</Shell>
    </div>
  );
};

export default DashboardLayout;
