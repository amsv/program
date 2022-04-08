# Раздел 1: Web core

## Основные материалы к использованию

- [Документация HTML/CSS/JS](https://developer.mozilla.org/ru/) - самое свежее и актуальное
- [Учебник по JS](https://learn.javascript.ru/) - учебник Кантора
- [Совместимость браузеров с функционалом HTML/CSS/DOM API](https://caniuse.com/) - 
- [WebReference](https://webref.ru/) - хороший справочник HTML/CSS, но не учебник
- **Не используйте Htmlbook.ru** - много устаревшей, а то и вовсе ложной инфы
- (опционально) Вместо Github Pages можно использовать сервис now: [настройка](https://gist.github.com/didolf/48f51b2f891aceff35048334eb3a96c8)

## Блок 1.1: Оценка знаний на верстку + Git
Оценка знаний верстки и качества кода HTML/CSS  
[Ссылка на задачу](https://github.com/jm-program/css-task)  

#### Работа с гит
[Базовый курс по Git](https://www.youtube.com/playlist?list=PLIU76b8Cjem5B3sufBJ_KFTpKkMEvaTQR)  
[Learn Git Branching](https://learngitbranching.js.org/) - Первые 2 задания  

#### Удобные графические редакторы для Git
- Встроенные инструменты WebStorm
- [GitKraken](https://www.gitkraken.com/)
- [SmartGit](https://www.syntevo.com/smartgit/)

## Блок 1.2: Основы CSS/HTML
[Знакомство с HTML и CSS](https://htmlacademy.ru/courses/basic-html-css)  
[Продвинутый HTML и CSS](https://htmlacademy.ru/courses/advanced-html-css)  

#### Доп информация:
- [Немного о доступности](https://medium.com/@ABatickaya/%D0%BF%D0%B8%D1%88%D0%B5%D0%BC-html-%D0%BD%D0%B5-%D0%B7%D0%B0%D0%B1%D1%8B%D0%B2%D0%B0%D1%8F-%D0%BE-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%D1%81%D1%82%D0%B8-9ffbf97ecbe7)
- [Макеев про кнопки, ссылки и доступность (видео)](https://www.youtube.com/watch?v=MWJKwn_gKR4)
- [img или background](https://htmlacademy.ru/blog/useful/image/content-or-decor-img)
- [Про svg](https://htmlacademy.ru/blog/useful/image/a-guide-to-svg-on-web)
- [Единицы измерения CSS](https://learn.javascript.ru/css-units)
- [JPEG и PNG — в чём разница форматов?](https://web-creator.ru/articles/jpeg_vs_png)
- [Скрытие элементов в вебе](https://dev-gang.ru/article/skrytie-elementov-v-vebe-3zoi5nbzxo/)
- [Кастомные чекбоксы правильно](https://www.youtube.com/watch?v=E6kLaaQFctU)
- [Сколько весят селекторы?](http://css.yoksel.ru/specifity/)

#### Темы для ревью:
- Структура HTML
- Семантическая разметка и SEO. Доступность.
- Инструменты разметки и оформления текста, управление отображением
- Различия форматов изображений, особенности SVG
- Оформление текста
- Псевдоклассы и псевдоэлементы
- Продвинутые селекторы, стилизация радио/чекбоксов
- Расчет специфичности селекторов
- Работа с таблицами и формами, различные типы инпутов
- Наследование CSS

## Блок 1.3: Построение сеток + БЭМ именование
[Сетки](https://htmlacademy.ru/courses/layout)  
[Документация БЭМ](https://ru.bem.info/methodology/quick-start/) - Первые 4 раздела  
[Доклад по БЭМ](https://www.youtube.com/watch?v=kBgHdSOj33A) ( [Слайды](http://ihorzenich.github.io/talks/bem-frontendweekend/) )  
[Методология БЭМ за 17 минут](https://www.youtube.com/watch?v=HihYQVuH64U)  
[Chrome DevTools](https://ru.hexlet.io/courses/html/lessons/devtools/theory_unit)  

#### Доп материалы:
- [Кроссбраузерная верстка](https://htmlacademy.ru/blog/video/shorts/short-21)
- [Flexbox Cheatsheet](https://yoksel.github.io/flex-cheatsheet/)
- [* { box-sizing: border-box; }](https://toster.ru/q/520184)
- [CSS Медиа запросы](https://itchief.ru/lessons/html-and-css/css-media-queries)
- [Адаптивный дизайн сайта](https://itchief.ru/bootstrap/responsive-website-design)
- [Основы Figma для верстальщика](https://htmlacademy.ru/blog/useful/image/figma)

#### Примечания:
- На CSS таблицах практику пропускаем, только ознакомьтесь с теорией. По факту используются редко, если что - нагуглите.
- inline-block и float для сеток устарели, но нужны для старых браузеров и саппорта старых проектов
- flex самая актуальная технология, на данный момент
- У grid еще не супер поддержка, но на будущее пригодится

#### Задание
Сверстать блок из [макета](https://www.figma.com/file/bZw1N2Q11xjRlRZWgpN74I/Block4), выложить на Github/Github pages. 
- Это часть макета из блока 1.6, поэтому выделяйте общие элементы исходя из итогового макета.
- Для верстки использовать flexbox.  
- Используем подход Mobile First: Сначала верстаем версию на 320px - потом прописываем измнения для остальных экранов  
- [Шрифт для макета](https://webfonts.pro/base-web-fonts/sans-serif-grotesque/897-tt-lakes.html)  
- Все стили должны быть по БЭМ. Стиль именования - two dashes: `block-name__elem-name--mod-name--mod-val`
- На мобилке меню скроллится с помощью стандартного горизонтального скролла, см. свойство overflow
- На различный порядок и количество пунктов меню не обращайте внимание - меню на всех разрешениях должно быть одинаковым. По непонятным моментам в макете - обращайтесь к однокурсникам или ментору.

#### Темы для ревью:
- Блочная модель документа
- Верстка флоатами и inline-block - их проблемы и способы решения
- Анатомия flexbox
- Гриды
- Особенности кроссбраузерной верстки, поддержка гридов и флексов, вендорные префиксы
- С какими проблемами борется БЭМ
- Термины БЭМ: Блок, элемент, модификатор, микс
- overflow

## Блок 1.4: Продвинутая стилизация
[Декоративные эффекты](https://htmlacademy.ru/courses/decoration) (без испытаний, материал по border-image пропускаем)  
[Динамические эффекты](https://htmlacademy.ru/courses/dynamic)  
[Мастерские](https://htmlacademy.ru/courses/workshop)  

#### Доп материалы:
- [Почему перемещать элементы с помощью translate лучше, чем с position:absolute](https://habr.com/ru/post/163645/)
- [Emmet](https://habr.com/ru/post/175747/) (увы, на html academy не работает =( )
- [Контекст наложения](https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)

#### Задание
Сверстать блок из [макета](https://www.figma.com/file/VcovJdfnWZ8phhsqbAUIBr/Block-5-task), кладем отдельным файлом в предыдущий репозиторий. 
Блок должен быть шириной 320 пикселей и фиксироваться в левой части экрана независимо от размера экрана. 
При наведении стиль кнопок плавно меняется, возьмите для этого какой-нибудь css filter или opacity.

#### Темы для ревью:
- Позиционирование
- Фоны
- Тени
- Градиенты
- Трансформации
- Анимации
- z-index

## Блок 1.5: JavaScript в браузере

[Требования к стилю кода](https://learn.javascript.ru/coding-style)  
[Программирование на JavaScript](https://htmlacademy.ru/courses/javascript) - Без задач из "Практика".   
[JS в браузере](https://htmlacademy.ru/courses/javascript-in-browser)  

#### Доп материалы:
- [Введение](https://learn.javascript.ru/intro)
- [Типы данных](https://learn.javascript.ru/types)
- [Приведение типов](https://learn.javascript.ru/type-conversions)
- [Замыкания](http://learn.javascript.ru/closure)

#### Задание
Сверстать блок из [макета](https://www.figma.com/file/dYxTnDZa3xXgpHbcpbVm95/Block6), добавить к предыдущему репозиторию. 
Блок должен иметь разное количество элементов при разной ширине экранов.  
По нажатию на "Показать все" открываются все ссылки, по "Скрыть" сворачиваются обратно.  
На мобильном инициируем [этот слайдер](https://swiperjs.com/) (погуглите, как это сделать только для мобилки, переключение при ресайзе не обязательно). На отличие набора брендов при разных разрешениях не обращайте внимание, главное чтобы их количество и внешний вид соответствовал макету.

#### Темы для ревью:
- Типы данных
- Приведение типов
- Области видимости
- Взаимодействие с DOM
- Обработка событий
- Замыкания

## Блок 1.6: Настройки окружения + верстка финального макета

- [Что такое npm?](https://proglib.io/p/chto-takoe-npm-gayd-po-node-package-manager-dlya-nachinayushchih-2020-07-21)
- [Руководство Eslint + Prettier](https://ru.hexlet.io/blog/posts/rukovodstvo-eslint-prettier)
- [Webpack](https://www.youtube.com/watch?v=eSaF8NXeNsA&t=2s&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD)

[Задание по верстке](https://gist.github.com/jm-program/b786de1a1f34b62d3c30e587fb0c3d3d)  
Скрипты для запуска проекта и деплоя на Github Pages смотрим в репо сборки.
- На различный порядок и количество пунктов меню не обращайте внимание - меню на всех разрешениях должно быть одинаковым. По непонятным моментам в макете - обращайтесь к однокурсникам или ментору.

#### Доп материалы:
- [Полезные команды npm](https://htmlacademy.ru/blog/useful/nodejs/useful-commands-for-working-with-nodejs)
- [Автоматизация задач с помощью npm run](https://frontender.info/task_automation_with_npm_run/)
- [SCSS + БЭМ](https://nicothin.pro/idiomatic-pre-CSS/)

#### Инструменты:
- [SCSS](https://sass-scss.ru/guide/) - нас интересует вложенность правил, импорты, переменные
- autoprefixer
- [normalize.css](https://htmlacademy.ru/blog/useful/css/about-normalize-css)
- editorconfig

#### На что смотрим в верстке:
- Правильный БЭМ нейминг
- Корректное использование тегов
- Корректное отображение на всех разрешениях от 320px до 1920px
- Нормально подключенные шрифты
- Коррекная работа интерактива
- Использование возможностей SCSS в сочетании с БЭМ
- Плавные анимации, ховеры на кликабельных элементах
- Отсутствие ошибок в консоли

#### Темы для ревью:
- npm
- babel
- source maps
- dependencies
- lock файл
- npm scripts