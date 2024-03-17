import Game from "@/db/Models/Game";
import connect from "@/db/connect";
import { Button, Label, RangeSlider, Select, TextInput } from "flowbite-react";
import create from "@/server/actions/achievement/create";
import { BsFillSendFill } from "react-icons/bs";

export default async function page() {
  //   const session = await getServerAuthSession();
  //   if (!session) {
  //     return NextResponse.redirect(
  //       "/login?message=You need to be logged in to create an achievement.",
  //     );
  //   }
  await connect();
  const games = await Game.find({});
  return (
    <div className="tt-page-layout">
      <h1 className="tt-heading">Create an achievement</h1>
      <div className="tt-layout text-black">
        <form className="flex w-full flex-col gap-4" action={create}>
          <div className="mt-2 block ">
            <Label
              htmlFor="name"
              className="text-black"
              value="Achievement name"
            />
          </div>
          <TextInput
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
          />
          <div>
            <div className="mb-1 block">
              <Label htmlFor="diff" className="text-black" value="Difficulty" />
            </div>
            <RangeSlider
              defaultValue={1}
              max={5}
              min={1}
              step={1}
              sizing="lg"
              name="difficulty"
              id="diff"
            />
            <div className="mb-2 block">
              <Label
                htmlFor="games"
                className="text-black"
                value="Choose a game"
              />
            </div>
            <Select id="games" name="game" required>
              {games.map((game) => (
                <option key={game._id.toString()} value={game._id.toString()}>
                  {game.name}
                </option>
              ))}
            </Select>
          </div>

          <textarea
            name="content"
            className="rounded-lg text-gray-600"
            placeholder="Describe your achievement..."
            required
          />
          <Button className="rounded-t-md" type="submit">
            <BsFillSendFill className="mr-1" /> Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
