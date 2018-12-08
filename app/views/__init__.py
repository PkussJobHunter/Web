from .main import main
from .users import users
from .api import api
from .pages import pages
from .pages.calendar import *
from .pages.index import *
from .pages.charts import *
from .pages.examples import *
from .pages.forms import *
from .pages.layout import *
from .pages.mailbox import *
from .pages.tables import *
from .pages.ui import *
from .pages.widgets import *

DEFAULT_BLUEPRINT = (
    (main, ''),
    (users,'/users'),
    (api, '/api'),
    (pages, '/pages')
)


# 封装配置蓝本的函数
def config_blueprint(app):
    # 循环读取元组中的蓝本
    for blueprint, prefix in DEFAULT_BLUEPRINT:
        app.register_blueprint(blueprint, url_prefix=prefix)
