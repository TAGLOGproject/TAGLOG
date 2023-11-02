export const onCustomImageUpload = async (file: File) => {
  const fileName = encodeURIComponent(file.name);

  const fileType = encodeURIComponent(file.type);
  const api = `/api/imgupload?file=${fileName}&fileType=${fileType}`;

  const res = await fetch(api);
  const { url, fields, imgUrl } = await res.json();

  const formData = new FormData();

  Object.entries({ ...fields, file }).forEach(([key, value]) => {
    formData.append(key, value as string);
  });

  const upload = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  if (upload.ok) {
    return new Promise((resolve) => {
      const imgMdUrl = imgUrl;
      resolve(imgMdUrl);
    });
  }

  throw new Error('Upload failed.');
};
