import EntryCard from "@/app/(components)/EntryCard";
import values from "../../(models)/Value";
const page = async ({ params }) => {
  const data = await getData(params);
  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <EntryCard match={item} />
          </div>
        ))}
    </div>
  );
};

export async function getData(params) {
  try {
    // const data = await values.find();
    const data = await values.find({ name: params.id});
    // console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return { props: { error: "Error fetching data" } };
  }
}

export default page;
