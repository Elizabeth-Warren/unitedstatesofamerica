# unitedstatesofamerica

Convert a two–letter state abbreviation to the full state name. Supports US territories and armed forces designations.

## Setup

```sh
$ npm install @ewarren/unitedstatesofamerica
```

## Usage

**Convert a two-letter code to the name of a state**

```js
import { lookup } from '@ewarren/unitedstatesofamerica';

lookup('NY'); // => 'New York'
```

**Reverse lookup the code of a state based on its name**

```js
import { reverseLookup } from '@ewarren/unitedstatesofamerica';

reverseLookup('Guam'); // => 'GU'
```

**Access the raw data**

```js
import {
  states,
  territories,
  associations,
  armedForces,
  all,
} from '@ewarren/unitedstatesofamerica';
```

## Local development

To run tests (requires Docker),

```sh
$ make tests
```
