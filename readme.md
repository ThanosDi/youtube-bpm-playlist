# YouTube BPM Playlist :tea:

Create a youtube playlist for songs of certain bpm tempo :rocket:
## WARNING
For this program to work you need to have a valid API Key for YouTube.
This is free and to obtain one you have to follow this procedure.

You can save you api key as an env variable `YOUTUBE_DATA_API_3` or add it inline with the `--apikey` variable.

Youtube API has a daily 10.000 units limit per day, but each search "costs" 100 units.
So for example each playlist will aprox. cost 2.500 units (searching about 25 song). This result that the app can be used about 4 times a day.
More info: https://developers.google.com/youtube/v3/getting-started#quota

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/3jZ5vnv-LZc/0.jpg)](https://www.youtube.com/watch?v=3jZ5vnv-LZc)


## Install :hammer:
```bash
$ npm install -G ytb-bpm
```

## Usage
```javascript
$ ytb-bpm --bpm 110 --genre 44 -apikey aValidApiKey
```
Output
```javascript
 __   __         _____      _            ____  ____  __  __         _             _ _     _   
 \ \ / /__  _   |_   _|   _| |__   ___  | __ )|  _ \|  \/  |  _ __ | | __ _ _   _| (_)___| |_ 
  \ V / _ \| | | || || | | | '_ \ / _ \ |  _ \| |_) | |\/| | | '_ \| |/ _` | | | | | / __| __|
   | | (_) | |_| || || |_| | |_) |  __/ | |_) |  __/| |  | | | |_) | | (_| | |_| | | \__ \ |_ 
   |_|\___/ \__,_||_| \__,_|_.__/ \___| |____/|_|   |_|  |_| | .__/|_|\__,_|\__, |_|_|___/\__|
                                                             |_|            |___/             
https://www.youtube.com/watch?v=sJXZ9Dok7u8&list=TLGG3Wv50y2cGgswNjA1MjAxOQ


```

### Help

```javascript
$ ytb-bpm --help
```

### Genres supported [-g param]
```bash
      2-Step : 818
      A capella : 700
      Acid : 1
      Acid Jazz : 701
      Acid Punk : 702
      Acoustic : 703
      Alternative : 704
      AlternRock : 705
      Ambient : 2
      Avantgarde : 706
      Bachata : 813
      Ballad : 707
      Banda : 814
      Bass : 708
      Bebob : 709
      Big Band : 710
      Bluegrass : 711
      Blues : 712
      Booty Bass : 3
      Breaks : 4
      Cabaret : 713
      Celtic : 714
      Cha-Cha : 817
      Chamber Music : 715
      Chanson : 716
      Chinese : 802
      Chorus : 717
      Christian : 816
      Christian Rap : 718
      Classical : 720
      Classic Rock : 719
      Club : 5
      Comedy : 721
      Country : 722
      Cult : 723
      Dance : 6
      Dancehall : 811
      Dance Hall : 724
      Darkwave : 725
      Death Metal : 726
      Deep House : 805
      Disco : 7
      Disco House : 8
      Dream : 727
      Drum & Bass : 9
      Drum Solo : 728
      Dubstep : 806
      Duet : 729
      Easy Listening : 730
      Electronic : 731
      Electronica : 809
      Epic Trance : 10
      Ethnic : 732
      Eurodance : 11
      Eurohouse : 12
      Euro-Techno : 13
      Experimental : 14
      Fast Fusion : 733
      Folk : 734
      Folklore : 735
      Folk-Rock : 736
      Freestyle : 15
      Funk : 737
      Fusion : 738
      Game : 739
      Gangsta : 740
      Garage : 16
      Goa Trance : 17
      Gospel : 741
      Gothic : 742
      Gothic Rock : 743
      Grunge : 744
      Happy Hardcore : 18
      Hardcore : 21
      Hard House : 19
      Hard Rock : 745
      Hard Trance : 20
      Hi-NRG : 22
      Hip-Hop : 23
      House : 24
      Humour : 746
      Industrial : 747
      Instrumental : 748
      Instrumental Pop : 749
      Instrumental Rock : 750
      International : 25
      Jazz : 751
      Jazz+Funk : 752
      J-Pop : 26
      Jungle : 27
      K-Pop : 753
      Latin : 28
      Latin Pop : 807
      Lo-Fi : 754
      Meditative : 755
      Merengue Mambo : 815
      Metal : 756
      Musical : 757
      National Folk : 758
      Native American : 759
      New Age : 760
      New Wave : 29
      Noise : 761
      Oldies : 762
      Old School : 30
      Opera : 763
      Other : 764
      Polka : 765
      Pop : 31
      Pop-Folk : 768
      Pop/Funk : 767
      Porn Groove : 769
      Power Ballad : 770
      Pranks : 771
      Primus : 772
      Progressive House : 32
      Progressive Rock : 773
      Progressive Trance : 33
      Psychedelic Rock : 774
      Psychedelic Trance : 34
      Punk : 775
      Punk Rock : 776
      Ragga : 36
      Rap : 777
      Rave : 778
      R&B : 35
      Reggae : 37
      Reggaeton : 810
      Retro : 779
      Revival : 780
      Rhythmic Soul : 781
      Rock : 38
      Rock & Roll : 782
      Salsa : 812
      Samba : 39
      Satire : 783
      Showtunes : 784
      Ska : 785
      Slow Jam : 40
      Slow Rock : 786
      Sonata : 787
      Soul : 41
      Sound Clip : 788
      Soundtrack : 789
      Southern Rock : 790
      Space : 791
      Speech : 792
      Swing : 793
      Symphonic Rock : 794
      Symphony : 795
      Tango : 796
      Tech House : 42
      Techno : 43
      Techno-Industrial : 798
      Thai : 803
      Top 40 : 799
      Trailer : 800
      Trance : 44
      Tribal : 45
      Trip-Hop : 46
      Urban : 808
      Vietnamese : 804
      Vocal : 801
```

## Testing :bomb:
```bash
$ yarn test     # add -- --watch to monitor for changes
```

## Deploy :ship:
This app will automatically get published under `@thechatshop/your-module-name` on npm (when new code is on master and a new tag exists with `vX.X.X` format)

:rotating_light: **Check the [config.yml](./.circleci/config.yml) for more**

Here is an example:

```bash
git checkout master
# Will generate a tag as well
npm version patch #or major, minor, patch

git push --follow-tags
```

## License
The Chat Shop proprietary license