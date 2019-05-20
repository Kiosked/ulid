<h1 align="center">
	<br>
	<br>
	<img width="360" src="logo.png" alt="ulid">
	<br>
	<br>
	<br>
</h1>

[![Build Status](https://travis-ci.org/ulid/javascript.svg?branch=master)](https://travis-ci.org/ulid/javascript) [![codecov](https://codecov.io/gh/ulid/javascript/branch/master/graph/badge.svg)](https://codecov.io/gh/ulid/javascript)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://www.npmjs.com/package/ulid)

# THIS IS A FORK

This package was forked from the actively supported & stable [ulid](https://github.com/ulid/javascript) library. The fork was created to improve compatibility in older browsers.

# Universally Unique Lexicographically Sortable Identifier

UUID can be suboptimal for many uses-cases because:

- It isn't the most character efficient way of encoding 128 bits of randomness
- UUID v1/v2 is impractical in many environments, as it requires access to a unique, stable MAC address
- UUID v3/v5 requires a unique seed and produces randomly distributed IDs, which can cause fragmentation in many data structures
- UUID v4 provides no other information than randomness which can cause fragmentation in many data structures

Instead, herein is proposed ULID:

- 128-bit compatibility with UUID
- 1.21e+24 unique ULIDs per millisecond
- Lexicographically sortable!
- Canonically encoded as a 26 character string, as opposed to the 36 character UUID
- Uses Crockford's base32 for better efficiency and readability (5 bits per character)
- Case insensitive
- No special characters (URL safe)
- Monotonic sort order (correctly detects and handles the same millisecond)
