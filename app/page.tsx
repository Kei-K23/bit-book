import { columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/data-table";
import { db } from "@/lib/db";

export default async function Home() {
  const books = await db.book.findMany({
    orderBy: {
      created_timetick: "desc",
    },
  });
  return (
    <main>
      <DataTable columns={columns} data={books} />
    </main>
  );
}
