import { requireAuth as clerkRequireAuth } from "@clerk/express";

export const requireAuth = clerkRequireAuth({
  onError: (err, req, res) => {
    res.status(401).json({ error: "Unauthorized" });
  },
});
