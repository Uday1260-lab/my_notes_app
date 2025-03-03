exports.dashboard = async(req, res) => {
    const locals = {
        title: 'Notes App | Dashboard | Free',
        description: 'Nodejs Project'
    }

    res.render('dashboard/index', {locals, layout: '../views/layouts/dashboard'});
}
