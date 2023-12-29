const renderPageHome = async (req, res) => {
  try {
    const user = req.session.user;
    const infoPage = {
      title: 'Trang chủ',
      avatar: user.anhDaiDien,
      fullname: user.hoVaTen
    }
    res.render('home', { infoPage });
  } catch (error) {
    console.error('Render page banner failed', error);
  }
}

module.exports = {
  renderPageHome
}