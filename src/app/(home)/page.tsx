import { Sidebar } from "@/components/SiderBar";
import Header from "@/components/Header";
import Search from "@/components/Search";

import { User, UserRoundCheck, UserRoundPen } from "lucide-react";
const formData = [
  {
    id: 1,
    photo: "/placeholder.svg?height=40&width=40",
    name: "Terunesh Mesfin Adanech",
    age: "24 years",
    passportNumber: "EP*******",
    fileNumber: "432",
  },
  {
    id: 2,
    photo: "/placeholder.svg?height=40&width=40",
    name: "Terunesh Mesfin Adanech",
    age: "26 years",
    passportNumber: "EP*******",
    fileNumber: "432",
  },
  {
    id: 3,
    photo: "/placeholder.svg?height=40&width=40",
    name: "Terunesh Mesfin Adanech",
    age: "22 years",
    passportNumber: "EP*******",
    fileNumber: "432",
  },
  {
    id: 4,
    photo: "/placeholder.svg?height=40&width=40",
    name: "Terunesh Mesfin Adanech",
    age: "28 years",
    passportNumber: "EP*******",
    fileNumber: "432",
  },
  {
    id: 5,
    photo: "/placeholder.svg?height=40&width=40",
    name: "Terunesh Mesfin Adanech",
    age: "29 years",
    passportNumber: "EP*******",
    fileNumber: "432",
  },
];

export default function Page() {
  return (
    <>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <Search />
          </div>

          <div className="bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold p-6 border-b">
              All forms overview
            </h2>

            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-4">Personal Photo</th>
                    <th className="pb-4">Full Name</th>
                    <th className="pb-4">Age</th>
                    <th className="pb-4">Passport Number</th>
                    <th className="pb-4">File Number</th>
                    <th className="pb-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {formData.map((item) => (
                    <tr key={item.id} className="border-b last:border-0">
                      <td className="py-4">
                        <User />
                      </td>
                      <td className="py-4">{item.name}</td>
                      <td className="py-4">{item.age}</td>
                      <td className="py-4">{item.passportNumber}</td>
                      <td className="py-4">{item.fileNumber}</td>
                      <td className="py-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <span role="img" aria-label="edit">
                            ✏️
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
