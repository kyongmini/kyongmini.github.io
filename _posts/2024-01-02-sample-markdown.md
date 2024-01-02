---
layout: post
title: 숨겨진 패턴.
subtitle: 음식 속 숨겨진 패턴 찾기!
gh-repo: daattali/beautiful-jekyll
gh-badge: [star, fork, follow]
tags: [test]
comments: true
---

{: .box-success}
It is a '숨겨진 패턴' class of Winter Semister. I'll post the hidden pattern we found.


## Here is a secondary heading

[This is a link to a different site](https://deanattali.com/) and [this is a link to a section inside this page](#local-urls).

Here's a table:

| Number | Next number | Previous number |
| :------ |:--- | :--- |
| Five | Six | Four |
| Ten | Eleven | Nine |
| Seven | Eight | Six |
| Two | Three | One |


Here's my codes. They are codes for collecting the images of curry. First, you need to install 'beautifulsoup4', 'requests', 'Pillow'
~~~
!pip install beautifulsoup4
!pip install requests
!pip install Pillow
~~~

Second, you input your website URL you want to collect the images in the 'url'.
~~~
import requests
from bs4 import BeautifulSoup
import os
import re

# 파일 이름에서 유효하지 않은 문자를 제거하는 함수
def sanitize_filename(name):
    name = re.sub(r'[\\/*?:"<>|]', '_', name)  # 유효하지 않은 문자를 언더스코어로 대체
    return name

# 웹사이트 URL 설정 (카레를 한국어, 영어, 일본어, 러시아어를 구글 사진에 검색.)
url = 'https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%80%D0%B8&tbm=isch&ved=2ahUKEwj20arqtr2DAxWqRvUHHavdC38Q2-cCegQIABAA&oq=%D0%BA%D0%B0%D1%80%D1%80%D0%B8&gs_lcp=CgNpbWcQAzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzoECCMQJzoFCAAQgARQwwNYwwNg3QVoAHAAeACAAe0BiAGgA5IBBTAuMS4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=JlaTZfamFaqN1e8Pq7uv-Ac&bih=731&biw=1440'
# 웹사이트에 요청을 보내고 HTML 데이터를 받아옵니다.
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# 이미지를 저장할 폴더 생성
folder_name = 'curry_images'
if not os.path.exists(folder_name):
    os.makedirs(folder_name)

# 웹사이트에서 이미지 URL 추출
images = soup.find_all('img')

# 각 이미지 URL에 대해
for image in images:
    # 이미지 URL 가져오기
    img_url = image.get('src')
    if not img_url:
        continue

    # 이미지 파일 이름 추출 및 정제
    img_name = sanitize_filename(img_url.split('/')[-1])

    # 이미지 다운로드 및 저장
    try:
        img_data = requests.get(img_url).content
        with open(os.path.join(folder_name, img_name), 'wb') as file:
            file.write(img_data)
    except Exception as e:
        print(f'Error downloading {img_url}: {e}')

print(f'All images have been downloaded and saved in {folder_name}/')
~~~
if it is successfully downloaded, it will output the **All images have been downloaded and saved in 'your folder name'**

Finally, you converted the files into the images! 
~~~
from PIL import Image
import os

# 이미지가 저장된 폴더
folder_name = 'curry_images'

# 폴더 내의 모든 파일을 순회
for filename in os.listdir(folder_name):
    file_path = os.path.join(folder_name, filename)

    # 파일 확장자가 없거나 알 수 없는 경우
    if '.' not in filename or filename.split('.')[-1].lower() not in ['jpg', 'jpeg', 'png', 'bmp', 'tiff', 'gif']:
        try:
            # 이미지 파일인지 시도하여 열기
            with Image.open(file_path) as img:
                # PNG 형식으로 변환하여 저장
                png_path = os.path.splitext(file_path)[0] + '.png'
                img.save(png_path, 'PNG')
                print(f'Converted {filename} to PNG.')
        except IOError:
            print(f'{filename} is not a convertible image file.')

print("Conversion complete.")
~~~

And here is the same code with syntax highlighting:

```javascript
var foo = function(x) {
  return(x + 5);
}
foo(3)
```

And here is the same code yet again but with line numbers:

{% highlight javascript linenos %}
var foo = function(x) {
  return(x + 5);
}
foo(3)
{% endhighlight %}

## Boxes
You can add notification, warning and error boxes like this:

### Notification

{: .box-note}
**Note:** This is a notification box.

### Warning

{: .box-warning}
**Warning:** This is a warning box.

### Error

{: .box-error}
**Error:** This is an error box.

## Local URLs in project sites {#local-urls}

When hosting a *project site* on GitHub Pages (for example, `https://USERNAME.github.io/MyProject`), URLs that begin with `/` and refer to local files may not work correctly due to how the root URL (`/`) is interpreted by GitHub Pages. You can read more about it [in the FAQ](https://beautifuljekyll.com/faq/#links-in-project-page). To demonstrate the issue, the following local image will be broken **if your site is a project site:**

![Crepe](/assets/img/crepe.jpg)

If the above image is broken, then you'll need to follow the instructions [in the FAQ](https://beautifuljekyll.com/faq/#links-in-project-page). Here is proof that it can be fixed:

![Crepe]({{ '/assets/img/crepe.jpg' | relative_url }})
