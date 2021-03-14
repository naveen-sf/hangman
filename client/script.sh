#!/usr/bin/env bash
# shellcheck disable=SC2154
echo "${date} - Install and build legacy APP"
# shellcheck disable=SC2164
cd legacy/pws-web-app && \
rm -rf build && \
npm install
# create new build
PUBLIC_URL=/legacy/ SKIP_PREFLIGHT_CHECK=true npm run build
# shellcheck disable=SC2164
shopt -s extglob # use invert or negative wildcards:
cd ../../public/legacy && rm -rvf -- !(.gitkeep) && ls -l
(cd ../../legacy/pws-web-app/build && tar c .) | (cd ../../public/legacy && tar xf -)
ls -l ../../public/legacy
echo "${date} - legacy APP build done"
echo "==============================="
echo "${date} - Install and build new APP"
cd ../../ && \
rm -rf build && \
yarn install
yarn run build
echo "${date} - new APP build done"
