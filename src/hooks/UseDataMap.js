export const UseDataMap = (data = []) => {
  let newDataObject = data;

  if (newDataObject.length > 0) {
    newDataObject.map((item) => ({
      alt_description: item.alt_description ?? "",
      id: item.id ?? null,
      thumbUri: item.urls.thumb ?? "",
      regular: item.urls.regular ?? "",
      fullUri: item.urls.full ?? "",
    }));
  }

  return newDataObject;
};
