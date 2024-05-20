import prisma from "../config/prisma.js";

const get = async(req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
}

const store = async(req, res) => {
  const { name, email } = req.body;

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  res.json(newUser);
};

export default {
  get,
  store
}
