import EntryCard from "@/app/(components)/EntryCard";
import values from "../../(models)/Value";
const page = async ({ params }) => {
  const data = await getData(params);
  // console.log(data + "sdhnfwwef");
  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <EntryCard match={item} />
          </div>
        ))}
    </div>
  );
};

export async function getData(params) {
  try {
    const data = await values.find();
    return data;
  } catch (err) {
    console.error(err);
    return { props: { error: "Error fetching data" } };
  }
}

export default page;
