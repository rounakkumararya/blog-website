import { useSelector } from "react-redux";
import { TextInput, Button, Label, FileInput } from "flowbite-react";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl ">Profile</h1>
      <form className="flex flex-col gap-5 ">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.profilePic}
            alt="profile picture"
            className="rounded-full w-full h-full object-cover border-4 border-[lightgray]"
          />
        </div>
        <div>
          <div>
            <Label value="Upload Profile picture" />
          </div>
          <FileInput
            id="file-upload-helper-text"
            helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label value="Change username" />
          <TextInput
            type="text"
            id="username"
            placeholder="username"
            defaultValue={currentUser.username}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label value="Change email" />
          <TextInput
            type="email"
            id="email"
            placeholder="email"
            defaultValue={currentUser.email}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label value="Change password" />
          <TextInput
            type="password"
            id="password"
            placeholder="password"
            defaultValue="**********"
          />
        </div>
        <Button type="submit" color="blue">
          Update
        </Button>
        <Button type="submit" color="info">
          Sign Out
        </Button>
        <Button type="submit" color="failure">
          Delete Account
        </Button>
      </form>
      <div className="mt-5 max-w-lg mx-auto w-full"></div>
    </div>
  );
}
