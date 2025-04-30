#
# pnpm run update

# backup
mv docs/ bak.next.docs
rm -rf readmes

# regenerate
node scripts/remove.version.js $1
rm -rf docs
mv versioned_docs/version-$1/ docs
rm -rf versioned_readmes/$1
rm -rf versioned_sidebars/version-$1-sidebars.json
pnpm i @public-ui/components@~$1 @public-ui/react@~$1 @public-ui/theme-default@~$1
pnpm run docusaurus docs:version $1
mv readmes/ versioned_readmes/$1

# restore
rm -rf docs
mv bak.next.docs/ docs
pnpm i @public-ui/components@latest @public-ui/react@latest @public-ui/theme-default@latest
