---
layout: post
title: 숨겨진 패턴
subtitle: 음식 속 숨겨진 패턴 찾기!
gh-repo: daattali/beautiful-jekyll
tags: [test]
comments: true
---

{: .box-success}
It is a **'Hidden Pattern'** class of Winter Semister. I'll post the code I used to find hidden patterns.


## Before you look at the code,,

In order to execute the code, you need to install 'beautifulsoup4', 'requests', 'Pillow', 'pandas'.
~~~
!pip install beautifulsoup4
!pip install requests
!pip install Pillow
!pip install pandas
~~~

### 1. Extracting Images

{: .box-error}
**Disabled:** As a result, we did not use this code.


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




### 2. Tables and Graphs of Curry Cutting styles by country

~~~
import matplotlib.pyplot as plt
import numpy as np

# Data for the graph
categories = ['dice', 'chop', 'slice', 'mince']
korean_meat = [7, 2, 0, 0]  # Korean style meat cutting
korean_onion = [4, 1, 4, 0]  # Korean style onion cutting
japanese_meat = [9, 0, 0, 0]  # Japanese style meat cutting
japanese_onion = [2, 1, 5, 0]  # Japanese style onion cutting
indian_meat = [9, 0, 0, 0]  # Indian style meat cutting
indian_onion = [4, 2, 1, 2]  # Indian style onion cutting

# X locations for the groups
bar_width = 0.35
index = np.arange(len(categories))

# Plotting the graph
fig, ax = plt.subplots(3, 1, figsize=(10, 15))

# Korean Style
ax[0].bar(index, korean_meat, bar_width, color='r', label='Meat')
ax[0].bar(index + bar_width, korean_onion, bar_width, color='b', label='Onion')
ax[0].set_title('Korean Curry Cutting Styles')
ax[0].set_xticks(index + bar_width / 2)
ax[0].set_xticklabels(categories)
ax[0].legend()

# Japanese Style
ax[1].bar(index, japanese_meat, bar_width, color='r', label='Meat')
ax[1].bar(index + bar_width, japanese_onion, bar_width, color='b', label='Onion')
ax[1].set_title('Japanese Curry Cutting Styles')
ax[1].set_xticks(index + bar_width / 2)
ax[1].set_xticklabels(categories)
ax[1].legend()

# Indian Style
ax[2].bar(index, indian_meat, bar_width, color='r', label='Meat')
ax[2].bar(index + bar_width, indian_onion, bar_width, color='b', label='Onion')
ax[2].set_title('Indian Curry Cutting Styles')
ax[2].set_xticks(index + bar_width / 2)
ax[2].set_xticklabels(categories)
ax[2].legend()

plt.tight_layout()
plt.show()
~~~


Here's a Korean Curry table:

| Meat Cutting Style | Onion Cutting Style | Source |
| :------ |:--- | :--- |
| dice | dice | [source1](https://www.10000recipe.com/recipe/6851792) |
| dice | slice | [source2](https://www.10000recipe.com/recipe/6844505) |
| dice | slice | [source3](https://wtable.co.kr/recipes/mMM45amBYXyqzg4WMLCjKCgG) |
| dice | dice | [source4](https://www.sbfoods-worldwide.com/ko/recipes/010.html) |
| chop | chop | [source5](https://themoonworld.com/%EA%B3%A0%EC%86%8C%ED%95%98%EA%B3%A0-%EC%A7%84%ED%95%9C-%EC%9A%B0%EC%9C%A0%EC%B9%B4%EB%A0%88-%EB%A7%8C%EB%93%A4%EA%B8%B0/#google_vignette) |
| dice | dice | [source6](https://www.10000recipe.com/recipe/69013) |
| chop | slice | [source7](https://www.10000recipe.com/recipe/6834483) |
| dice | dice | [source8](https://www.10000recipe.com/recipe/6911352) |
| dice | slice | [source9](https://www.youtube.com/watch?v=lCwcPiDE3Sk) |

Here's a Japanese Curry table:

| Meat Cutting Style | Onion Cutting Style | Source |
| :------ |:--- | :--- |
| dice | slice | [source1](https://wtable.co.kr/recipes/SeQmzbBqCYtSooGAED62wQ3h) |
| dice | slice | [source2](https://www.10000recipe.com/recipe/6962514) |
| dice | dice | [source3](https://www.sbfoods-worldwide.com/ko/recipes/103.html) |
| dice | chop | [source4](https://www.sbfoods-worldwide.com/ko/recipes/066.html) |
| dice | slice | [source5](https://www.10000recipe.com/recipe/6905411) |
| dice | slice | [source6](https://chef-choice.tistory.com/61) |
| dice | dice | [source7](https://www.10000recipe.com/recipe/6835633) |
| dice | slice | [source8](https://www.10000recipe.com/recipe/6841762) |
| dice | chop | [source9](https://www.sbfoods-worldwide.com/ko/recipes/012.html) |

Finally, here's a Indian Curry table:

| Meat Cutting Style | Onion Cutting Style | Source |
| :------ |:--- | :--- |
| dice | dice | [source1](https://www.10000recipe.com/recipe/6988698) |
| dice | dice | [source2](https://www.10000recipe.com/recipe/6910009) |
| dice | slice | [source3](https://www.10000recipe.com/recipe/6988698) |
| dice | dice | [source4](https://themoonworld.com/%EB%B2%84%ED%84%B0%EC%B9%98%ED%82%A8%EC%BB%A4%EB%A6%AC-%ED%8E%98%EC%9D%B4%EC%8A%A4%ED%8A%B8-%EC%97%86%EC%9D%B4-%EC%9D%B8%EB%8F%84-%EB%B2%84%ED%84%B0%EC%B9%98%ED%82%A8%EC%BB%A4%EB%A6%AC-%EB%A7%8C/) |
| dice | chop | [source5](http://tastekick.net/recipe/%EC%96%91%EA%B3%A0%EA%B8%B0-%EC%9D%B8%EB%8F%84-%EC%BB%A4%EB%A6%AC/) |
| dice | chop | [source6](https://www.10000recipe.com/recipe/69013) |
| dice | mince | [source7](https://www.10000recipe.com/recipe/6839725) |
| dice | mince | [source8](https://www.10000recipe.com/recipe/1773403) |
| dice | dice | [source9](https://www.10000recipe.com/recipe/6988698) |

*We looked into the recipe for curry that must have onions and meat in it.

And the code and graph for the above tables.

~~~
import matplotlib.pyplot as plt
import numpy as np

# Data for the graph
categories = ['dice', 'chop', 'slice', 'mince']
korean_meat = [7, 2, 0, 0]  # Korean style meat cutting
korean_onion = [4, 1, 4, 0]  # Korean style onion cutting
japanese_meat = [9, 0, 0, 0]  # Japanese style meat cutting
japanese_onion = [2, 1, 5, 0]  # Japanese style onion cutting
indian_meat = [9, 0, 0, 0]  # Indian style meat cutting
indian_onion = [4, 2, 1, 2]  # Indian style onion cutting

# X locations for the groups
bar_width = 0.35
index = np.arange(len(categories))

# Plotting the graph
fig, ax = plt.subplots(3, 1, figsize=(10, 15))

# Korean Style
ax[0].bar(index, korean_meat, bar_width, color='r', label='Meat')
ax[0].bar(index + bar_width, korean_onion, bar_width, color='b', label='Onion')
ax[0].set_title('Korean Curry Cutting Styles')
ax[0].set_xticks(index + bar_width / 2)
ax[0].set_xticklabels(categories)
ax[0].legend()

# Japanese Style
ax[1].bar(index, japanese_meat, bar_width, color='r', label='Meat')
ax[1].bar(index + bar_width, japanese_onion, bar_width, color='b', label='Onion')
ax[1].set_title('Japanese Curry Cutting Styles')
ax[1].set_xticks(index + bar_width / 2)
ax[1].set_xticklabels(categories)
ax[1].legend()

# Indian Style
ax[2].bar(index, indian_meat, bar_width, color='r', label='Meat')
ax[2].bar(index + bar_width, indian_onion, bar_width, color='b', label='Onion')
ax[2].set_title('Indian Curry Cutting Styles')
ax[2].set_xticks(index + bar_width / 2)
ax[2].set_xticklabels(categories)
ax[2].legend()

plt.tight_layout()
plt.show()
~~~

## 3. Collecting the Recipes of Curry

~~~
import requests
from bs4 import BeautifulSoup
import re
import pandas as pd

def scrape_recipe(url):
    try:
        response = requests.get(url)
        if response.status_code != 200:
            return '레시피 제목 미확인', '재료 정보 미확인', '조리 방법 정보 미확인'

        soup = BeautifulSoup(response.text, 'html.parser')

        # HTML 구조에 맞게 수정 필요
        meta_tag = soup.find('meta', {'name': 'keywords'})
        description_text = meta_tag['content'] if meta_tag else ''

        title_match = re.search(r"^(.*?)[.!?]", description_text)
        title = title_match.group(1) if title_match else '레시피 제목 미확인'

        ingredients_match = re.search(r"\[재료\](.*?)(?=\n\n|\Z)", description_text, re.DOTALL)
        ingredients = ingredients_match.group(1).strip() if ingredients_match else '재료 정보 미확인'
        ingredients = re.sub(r"\n\s+", "\n", ingredients)

        instructions_match = re.split(r"\[재료\].*?(?=\n\n|\Z)", description_text, re.DOTALL)
        instructions = instructions_match[1].strip() if len(instructions_match) > 1 else '조리 방법 정보 미확인'

        return title, ingredients, instructions
    except Exception as e:
        # 오류 메시지 로깅
        print(f"URL 처리 중 오류 발생: {url}, 오류: {e}")
        return '레시피 제목 미확인', '재료 정보 미확인', '조리 방법 정보 미확인'

# 레시피 URL 목록
urls = ['https://www.10000recipe.com/recipe/6851792#google_vignette','https://www.10000recipe.com/recipe/6844505', 
        'https://www.10000recipe.com/recipe/6901376', 'https://www.10000recipe.com/recipe/6937042', 
        'https://www.10000recipe.com/recipe/6694927', 'https://www.10000recipe.com/recipe/6877152', 
        'https://www.10000recipe.com/recipe/6992309', 'https://www.10000recipe.com/recipe/6870032',
        'https://www.10000recipe.com/recipe/6864038', 'https://www.10000recipe.com/recipe/6856796',
        'https://www.10000recipe.com/recipe/6930392', 'https://www.10000recipe.com/recipe/6900907',
        'https://www.10000recipe.com/recipe/6875903', 'https://www.10000recipe.com/recipe/6911692',
        'https://www.10000recipe.com/recipe/6959177', 'https://www.10000recipe.com/recipe/6845845',
        'https://www.10000recipe.com/recipe/6876376', 'https://www.10000recipe.com/recipe/6998838',
        'https://www.10000recipe.com/recipe/6992967', 'https://www.10000recipe.com/recipe/6872172',
        
    # 다른 URL 추가...
]

# 각 URL에서 레시피 정보를 추출하고 DataFrame에 저장
recipes = []
for url in urls:
    title, ingredients, instructions = scrape_recipe(url)
    recipes.append({'제목': title, '재료': ingredients, '조리 방법': instructions})

df = pd.DataFrame(recipes)

# 데이터프레임을 엑셀 파일로 저장
df.to_excel('curry_recipes.xlsx', index=False)

print("엑셀 파일 저장 완료!")
~~~

{: .box-warning}
**Attention! :** The code above is a code that separates ingredients and cooking orders by spacing, so there are slight differences, so the error script was personally modified in Excel.


| Korean-Style Recipe | Caramelazation | Order of Cooking |
| :------ |:--- | :--- |
| recipe1 | O | 1-2-3-4-5 |
| recipe2 | O | 1-2-4-3-5 |
| recipe3 | X | 2-4-3-5 |
| recipe4 | X | 2-4-3-5 |
| recipe5 | X | 2-4-3-5 |
| recipe6 | O | 1-2-3-4-5 |
| recipe7 | O | 1-2-3-4-5 |
| recipe8 | X | 2-4-3-5 |
| recipe9 | X | 2-4-3-5 |
| recipe10 | X | 4-3-2-5 |
| recipe11 | X | 2-4-3-5 |
| recipe12 | O | 1-4-2-3-5 |
| recipe13 | X | 4-2-3-5 |
| recipe14 | X | 4-2-3-5 |
| recipe15 | X | 2-4-3-5 |
| recipe16 | X | 2-4-3-5 |
| recipe17 | X | 2-4-3-5 |
| recipe18 | O | 1-4-2-3-5 |
| recipe19 | X | 4-2-3-5 |
| recipe20 | X | 4-2-3-5 |

{: .box-note}
**Note:** 1. 양파 카라멜라이징
2. 고기 볶기 (넣기)
3. 물 넣기
4. 채소 볶기 (넣기)
5. 카레 넣기

 
## 4. Survey

We set **first preference's weight : 3 points, second preference's weight : 2 points, third preference's weight : 1 point**
It is code for this.
~~~
# Parsing the provided sequences and calculating weighted sums for each number

sequences = [
    "12-1-4", "6-9-12", "1-3-5", "13-10-11", "1-9-4", "7-10-1", "1-7-5", "1-7-9", "4-9-11", "1-9-15",
    "2-9-13", "14-1-13", "2-3-14", "1-9-12", "9-12-13", "11-7-6", "1-9-6", "9-7-1", "9-6-11", "1-6-4", "1-5-9"
]

# Dictionary to keep track of the total weighted sum for each number
number_weights = {}

for sequence in sequences:
    numbers = [int(num) for num in sequence.split('-')]
    
    # Assigning weights and adding to the total for each number
    for i, number in enumerate(numbers):
        weight = 3 - i  # Weight: 3 for the first number, 2 for the second, 1 for the third
        number_weights[number] = number_weights.get(number, 0) + weight

number_weights_sorted = sorted(number_weights.items(), key=lambda x: x[0])

number_weights_sorted
~~~

| Card Number | Total Point |
| :------ |:--- |
| 1 | 33 points |
| 2 | 6 points |
| 3 | 4 points |
| 4 | 6 points |
| 5 | 4 points |
| 6 | 9 points |
| 7 | 11 points |
| 8 | 0 point |
| 9 | 25 points |
| 10 | 4 points |
| 11 | 6 points |
| 12 | 7 points |
| 13 | 6 points |
| 14 | 4 points |
| 15 | 1 point |
| 16 | 0 point |

Then, we get the total point of each Card number.

And Let's categorize them. Here's the code.
~~~
# Given the data from the user, we will tally the scores for each category (main ingredient, side dish, topping, curry type)
# The user has provided the scores associated with each card number and wants a separate tally for each category.

# Assign the provided data to Python data structures
menu_items = {
    1: ['소고기', '밥', '돈까스', '한국식 카레'],
    2: ['돼지고기', '빵', '새우튀김', '한국식 카레'],
    3: ['닭고기', '면', '새우튀김', '한국식 카레'],
    4: ['닭고기', '밥', '돈까스', '한국식 카레'],
    5: ['소고기', '빵', '돈까스', '일본식 카레'],
    6: ['소고기', '밥', '새우튀김', '인도식 카레'],
    7: ['돼지고기', '밥', '후레이크', '인도식 카레'],
    8: ['돼지고기', '밥', '마늘 후레이크', '인도식 카레'],
    9: ['두부', '면', '돈까스', '인도식 카레'],
    10: ['돼지고기', '밥', '돈까스', '한국식 카레'],
    11: ['소고기', '면', '마늘 후레이크', '한국식 카레'],
    12: ['닭고기', '빵', '돈까스', '인도식 카레'],
    13: ['닭고기', '밥', '마늘 후레이크', '일본식 카레'],
    14: ['돼지고기', '면', '돈까스', '일본식 카레'],
    15: ['두부', '밥', '새우튀김', '일본식 카레'],
    16: ['두부', '빵', '마늘 후레이크', '한국식 카레']
}

# Card scores from the uploaded image
card_scores = {
    1: 33, 2: 6, 3: 4, 4: 6, 5: 4, 6: 9, 7: 11,
    8: 0, 9: 25, 10: 4, 11: 6, 12: 7, 13: 6, 14: 4,
    15: 1, 16: 0
}

# Initialize dictionaries to hold the total points for each category
total_scores = {
    'main': {},
    'side': {},
    'topping': {},
    'type': {}
}

# Function to add scores to the appropriate category
def add_to_total_scores(category, item, score):
    if item in total_scores[category]:
        total_scores[category][item] += score
    else:
        total_scores[category][item] = score

# Iterate over each card and tally the scores for each category
for card, items in menu_items.items():
    score = card_scores[card]
    add_to_total_scores('main', items[0], score)
    add_to_total_scores('side', items[1], score)
    add_to_total_scores('topping', items[2], score)
    add_to_total_scores('type', items[3], score)

total_scores
~~~

**Main Ingredient Total Points**

| Main Ingredient | Total Point |
| :------ |:--- |
| Beef | 52 points |
| Pork | 25 points |
| Chicken | 23 points |
| Tofu | 26 points |

**Side Dish Total Points**

| Side Dish | Total Point |
| :------ |:--- |
| Rice | 70 points |
| Bread | 17 points |
| Noodles | 39 points |

**Topping Total Points**

| Topping | Total Point |
| :------ |:--- |
| Pork Cutlet | 83 points |
| Fried Shrimp | 20 points |
| Flakes | 11 points |
| Garlic Flakes | 12 points |

**Curry Style Total Points**

| Curry Style | Total Point |
| :------ |:--- |
| Korean | 59 points |
| Japanese | 15 points |
| Indian | 52 points |

Additionally, let's find the total score of the card by category.

~~~
import matplotlib.pyplot as plt

# 데이터 준비
main_ingredients_1 = ['Beef', 'Pork', 'Chicken', 'Tofu']
main_points_1 = [52, 25, 23, 26]

side_dishes = ['Rice', 'Bread', 'Noodles']
side_points = [70, 17, 39]

toppings = ['Pork Cutlet', 'Fried Shrimp', 'Flakes', 'Garlic Flakes']
topping_points = [83, 20, 11, 12]

styles = ['Korean-style', 'Japanese-style', 'Indian-style']
style_points = [59, 15, 52]

# 4개의 서브플롯 생성
fig, axs = plt.subplots(2, 2, figsize=(15, 10))

# 첫 번째 그래프: Main Ingredient Total Points
axs[0, 0].bar(main_ingredients_1, main_points_1, color='skyblue')
axs[0, 0].set_title('Main Ingredient Total Points')
axs[0, 0].set_xlabel('Ingredients')
axs[0, 0].set_ylabel('Total Points')
for i, v in enumerate(main_points_1):
    axs[0, 0].text(i, v + 1, str(v), color='blue', fontweight='bold', ha='center')

# 두 번째 그래프: Side Dish Total Points
axs[0, 1].bar(side_dishes, side_points, color='red')
axs[0, 1].set_title('Side Dish Total Points')
axs[0, 1].set_xlabel('Side Dishes')
axs[0, 1].set_ylabel('Total Points')
for i, v in enumerate(side_points):
    axs[0, 1].text(i, v + 1, str(v), color='red', fontweight='bold', ha='center')

# 세 번째 그래프: Topping Total Points
axs[1, 0].bar(toppings, topping_points, color='green')
axs[1, 0].set_title('Topping Total Points')
axs[1, 0].set_xlabel('Toppings')
axs[1, 0].set_ylabel('Total Points')
for i, v in enumerate(topping_points):
    axs[1, 0].text(i, v + 1, str(v), color='green', fontweight='bold', ha='center')

# 네 번째 그래프: Style Total Points
axs[1, 1].bar(styles, style_points, color='purple')
axs[1, 1].set_title('Style Total Points')
axs[1, 1].set_xlabel('Styles')
axs[1, 1].set_ylabel('Total Points')
for i, v in enumerate(style_points):
    axs[1, 1].text(i, v + 1, str(v), color='purple', fontweight='bold', ha='center')

# 레이아웃 조정
plt.tight_layout()
plt.show()
~~~

Then, we can get graph below.



### Notification

{: .box-note}
**Note:** We used Chat GPT to code.


## Local URLs in project sites {#local-urls}

When hosting a *project site* on GitHub Pages (for example, `https://USERNAME.github.io/MyProject`), URLs that begin with `/` and refer to local files may not work correctly due to how the root URL (`/`) is interpreted by GitHub Pages. You can read more about it [in the FAQ](https://beautifuljekyll.com/faq/#links-in-project-page). To demonstrate the issue, the following local image will be broken **if your site is a project site:**

![Crepe](/assets/img/crepe.jpg)

If the above image is broken, then you'll need to follow the instructions [in the FAQ](https://beautifuljekyll.com/faq/#links-in-project-page). Here is proof that it can be fixed:

![Crepe]({{ '/assets/img/crepe.jpg' | relative_url }})
