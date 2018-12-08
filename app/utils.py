import math
import os
import json

# 添加静态文件md5版本号，刷新缓存
def version(path):
    locate = os.path.dirname(os.path.abspath(__file__))
    cache_file = locate + '/static/target/cachebusters.json'
    with open(cache_file, 'r') as f:
        data = json.load(f, encoding = 'utf-8')
        key = '..' + path[7 : ]
        if key in data.keys():
            return path + '?version=' + data[key]
        f.close()
    return path

def custom_paginator(current_page, num_page, max_page):
    middle = math.ceil(max_page / 2)
    if num_page <= max_page:
        start = 1
        end = num_page
    elif current_page <= middle:
        start = 1
        end = max_page
    elif middle < current_page < num_page - middle + 1:
        start = current_page - middle
        end = current_page + middle - 1
    else:
        start = num_page - max_page + 1
        end = num_page
    return start, end
