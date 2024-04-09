import { redirect } from "next/navigation";

const clientSecret = process.env.CLIENT_SECRET;
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const redirectUri = process.env.REDIRECT_URI;
let accessToken;

export const authenticate = async (authCode) => {
  if (authCode) {
    try {
      const res = await fetch(
        `https://unsplash.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&code=${authCode}&grant_type=authorization_code`,
        { method: "POST" }
      );
      const authData = await res.json();
      accessToken = authData.access_token;
      console.log(accessToken)
      return accessToken;
    } catch (err) {
      console.error(err);
    }
  } else {
    redirect(
      `https://unsplash.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=public+read_user+write_likes+write_photos`
    );
  }
};

export const updateUserLike = async (id, accessToken, isFavorite) => {
  const res = await fetch(`https://api.unsplash.com/photos/${id}/like`, {
    method: isFavorite ? "DELETE" : "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (res.status === 201) {
    console.log("Updated user like");
  }
};

export const getUser = async (authCode) => {
  const accessToken = await authenticate(authCode);

  const res = await fetch("https://api.unsplash.com/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const user = await res.json();
  return user;
};
