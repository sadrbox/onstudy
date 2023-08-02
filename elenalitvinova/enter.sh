#! /bin/bash/
arg=$1
ext="${arg##*.}"
fileName=${arg%.*}
resultFileName="$fileName.js"

# echo $ext
# echo $fileName
# echo $arg
# echo $resultFileName
echo "Testing TypeScript on file $resultFileName"
echo ""
tsc $arg &&
node $resultFileName