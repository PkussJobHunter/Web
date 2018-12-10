from ...extensions import cache
from flask import render_template
from . import pages
from app.models.user import User

# 视图函数
@pages.route('/', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def index():
    user = User()
    list = user.query.all()
    context = {
        'list' : list
    }
    return render_template('pages/index/index.html', ** context)
    pass

# 视图函数
@pages.route('/index2', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def index2():
    return render_template('pages/index/index2.html')
    pass