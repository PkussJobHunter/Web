import os
from flask import Blueprint, render_template
from ..extensions import cache

# 创建蓝本对象
main = Blueprint('main', __name__)

# 视图函数
@main.route('/', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def index():
    return render_template('pages/index/index.html', )
    pass
