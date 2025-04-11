const collections = ["doctors", "patients", "admins"];
let user = null;
let collectionUsed = "";

for (const name of collections) {
  const found = await db.collection(name).findOne({ email });
  if (found) {
    user = found;
    collectionUsed = name;
    break;
  }
}

if (!user) {
  return new Response(JSON.stringify({ error: "User not found." }), { status: 404 });
}

const hashedPassword = await hash(newPassword, 10);

await db.collection(collectionUsed).updateOne(
  { email },
  { $set: { password: hashedPassword } }
);
