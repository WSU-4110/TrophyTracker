import Game from "@/db/Models/Game";
import connect from "@/db/connect";
import { Label, RangeSlider, Select, TextInput } from "flowbite-react";
import achievementActions from "@/server/actions/achievement";

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
    <div className="w-full text-black">
      <h1>Create an achievement</h1>
      <form
        className="flex max-w-md flex-col gap-4"
        action={achievementActions.create}
      >
        <div className="mb-2 block">
          <Label htmlFor="name" value="Achievement name" />
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
            <Label htmlFor="diff" value="Difficulty" />
          </div>
          <RangeSlider
            defaultValue={1}
            max={5}
            min={1}
            step={1}
            name="difficulty"
            id="diff"
          />
          <div className="mb-2 block">
            <Label htmlFor="games" value="Choose a game" />
          </div>
          <Select id="games" name="game" required>
            {games.map((game) => (
              <option key={game._id.toString()} value={game._id.toString()}>
                {game.name}{" "}
              </option>
            ))}
          </Select>
        </div>

        <textarea name="content" placeholder="Description" required />
        <input type="submit" placeholder="Create achievement" />
      </form>
    </div>
  );
}
