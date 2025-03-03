exports.homepage = async(req, res) => {
    const locals = {
        title: 'Notes App | Home | Free',
        description: 'Nodejs Project'
    }

    res.render('index', {locals, layout: '../views/layouts/front_page'});
}

exports.aboutpage = async(req, res) => {
    const locals = {
        title: 'Notes App | About | Free',
        description: 'Nodejs Project'
    }

    res.render('about', locals);
}