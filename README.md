## Violet-Bot
![viogar](https://user-images.githubusercontent.com/84166927/128629420-68e083f9-a467-4058-b56c-ca9ef225c544.png)


##### Nothing Heree, Just Old Basic Bot :)


Recode [`kuriyama`](https://GitHub.com/Kokoronationz/kuriyama)

Original [`wabot-aq`](https://GitHub.com/Nurutomo/wabot-aq)

### Prefix
. # (default)

## FOR TERMUX USER

```bash
> pkg update && pkg upgrade
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> git clone https://github.com/unx21/violet
> cd violet
> npm install
```

---------

## FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFMPEG [`Click Here`](https://ffmpeg.org/download.html) (don't forget to path)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php) (if nulis want work,  checklist columns 1,2,3,5,6)

```bash
> git clone https://github.com/unx21/violet
> cd violet
> npm install
```

---------

## Run

```bash
> node . [<session name>] (session name is optional)

```

---------

## Arguments `node . [--options] [<session name>]`

### `--self`

Activate self mode (Ignores other)

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--big-qr`

If small qr unicode doesn't support

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------

#### Powered By :
<a href="https://api.xteam.xyz"><img src="https://img.shields.io/badge/XTEAM%20-%23121011.svg?&style=for-the-badge&logo=&logoColor=white"/></a>

#### Author / Creator : 
<a href="https://github.com/Nurutomo/wabot-aq"><img alt="GitHub" src="https://img.shields.io/badge/NURUTOMO%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></a>

#### Master : 
<a href="https://github.com/unx21/violet"><img alt="GitHub" src="https://img.shields.io/badge/UNX%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></a>
