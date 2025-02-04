import options from "@/app/api/auth/[...nextauth]/options";
import UserForm from "@/components/UserForm";
import prisma from "@/prisma/db";
import { getServerSession } from "next-auth";
import React from "react";

interface Props {
  params: { id: string };
}

const EditUser = async ({ params }: Props) => {
  //   const user = await prisma?.user.findUnique({
  //     where: {
  //       id: parseInt(params.id),
  //     },
  //   });
  const session = await getServerSession(options);
  if (session?.user.role !== "ADMIN") {
    return <p className="text-destructive">Admin access required</p>;
  }
  const userId = parseInt(params.id);

  if (isNaN(userId)) {
    return <p className="text-destructive">Invalid user ID</p>;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    return <p className="text-destructive">User not found</p>;
  }
  user.password = "";
  return <UserForm user={user} />;
};

export default EditUser;
