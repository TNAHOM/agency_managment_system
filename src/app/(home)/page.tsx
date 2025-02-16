import Search from "@/components/Search";

import FormList from "@/components/FormList";
import { formData } from "@/server/mockData";

export default function Page() {
  return (
    <>
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-8">
          <div className="mb-8">
            <Search />
          </div>

          <FormList formData={formData} headerTitle="All forms overview" />
        </main>
      </div>
    </>
  );
}
