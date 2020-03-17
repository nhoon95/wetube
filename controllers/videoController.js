export const home = (req, res) => res.render("home", { pagetitle: "home" });

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pagetitle: "search", searchingBy });
};

export const videos = (req, res) =>
  res.render("videos", { pagetitle: "videos" });

export const upload = (req, res) =>
  res.render("upload", { pagetitle: "upload" });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pagetitle: "videoDetail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pagetitle: "editVideo" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pagetitle: "deleteVideo" });