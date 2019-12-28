# Animal Crossing New Leaf SDK - Data Dump
This is a simple wrapper that contains a lot of raw data and a calendar helper for Animal Crossing New Leaf.

## Contents
 - List of Bugs (with Locations, Times, and Prices)
 - bleh
 - Fossils (with Prices)
 - Furniture (with Sources and Prices)
 - All Clothing (with Sources and Prices)
 - Art (with Fakes Information)
 - Villagers (With ALL the Data)
 - Calendar Service to find out what is available on any given day

## First Class Typescript support
This was written in typescript, thus it has first class support for it. Everything's typed, sometimes not great but it's there.

## To use
Simple import Bugs/Fishes/Villagers/etc from the main package, or `CalenderService` if you want to grab that. So something like

```js
import {Fishes, Bugs, CalenderService} from 'ac-nl-sdk';

Fishes.forEach((fish) => console.log(fish.Name));
Bugs.forEach((bug) => console.log(bug.Name));

const service = new CalendarService('2020-01-01');
console.log(service.getAll())
```