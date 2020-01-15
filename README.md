# mustread

Список хороших книг о разработке программ.
+ [Читать на сайте](https://mustread.kamyshev.me)
+ [Читать на GitHub](./mustread.md)

## Как добавить книгу
+ [Открой ишью с предложением](https://github.com/igorkamyshev/mustread/issues/new)
+ Обсуди целесообразность
+ Форкни репозиторий
+ Добавь книгу
+ Сделай пулл-реквест
+ Наслаждайся

## Разработка

Проект использует менеджер пакетов `yarn`. Развернуть сайт в дев-режиме можно так:
```
git clone git@github.com:igorkamyshev/mustread.git
yarn
yarn dev
```

Проект использует [Prettier](https://prettier.io) и линтеры ([ESLint](https://eslint.org) и [Stylelint](https://stylelint.io)):
```
yarn s pretty
yarn s lint --fix
```

Мы придерживаемся [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) для сообщений к коммитам. Чтобы легко сгенерировать сообщение по всем правилам есть специальная команда:
```
yarn s cz
```

## Деплой

Сайт автоматически деплоится в [Netlify](http://netlify.com/), на каждый пулл-реквест создается деплой-превью, где можно посмотреть как правка будет выглядеть на живом сайте.

Собрать сайт для продакшна можно так:
```
git clone git@github.com:igorkamyshev/mustread.git
yarn
yarn build
```
