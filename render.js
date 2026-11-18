// 把 projects.js 的資料畫成卡片。卡片的版型只在這個檔案，改這裡所有卡片一起變。

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function externalLink(url, className, text) {
  const link = element('a', className, text);
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener';
  return link;
}

function cardMedia(project, mainUrl) {
  if (project.image) {
    const media = externalLink(mainUrl, 'card__media');
    const image = element('img', project.fit === 'contain' ? 'is-contained' : '');
    image.src = project.image;
    image.alt = project.title;
    image.loading = 'lazy';
    media.append(image);
    return media;
  }
  // 沒有縮圖的卡片改顯示連結本身（通常是 repo 路徑）
  const media = externalLink(mainUrl, 'card__media card__media--text');
  const displayPath = mainUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
  media.append(
    element('span', 'card__media-label', '> open source'),
    element('span', 'card__media-path', displayPath),
  );
  return media;
}

function projectCard(project) {
  const mainUrl = project.url ?? project.links?.[0]?.url ?? '#';

  const title = element('h4', 'card__title');
  title.append(externalLink(mainUrl, '', project.title));

  const description = element('p', 'card__desc');
  description.append(
    element('span', 'card__desc-mark', '＞'),
    element('span', 'card__desc-text', project.description),
  );

  const body = element('div', 'card__body');
  body.append(title, description);

  if (project.links) {
    const links = element('ul', 'card__links');
    for (const link of project.links) {
      const item = element('li');
      item.append(externalLink(link.url, '', link.label));
      links.append(item);
    }
    body.append(links);
  }

  const card = element('article', 'card');
  card.append(cardMedia(project, mainUrl), body);
  return card;
}

function renderCards(containerId, projects) {
  const container = document.getElementById(containerId);
  if (container) container.append(...projects.map(projectCard));
}

function renderProjectGroups(containerId, groups) {
  const container = document.getElementById(containerId);
  if (!container) return;
  for (const group of groups) {
    const section = element('div', 'project-group');
    section.id = group.id;
    const grid = element('div', 'card-grid card-grid--wide');
    grid.append(...group.projects.map(projectCard));
    section.append(
      element('h3', 'project-group__title', `> ${group.title}`),
      element('p', 'project-group__blurb', group.blurb),
      grid,
    );
    container.append(section);
  }
}

renderProjectGroups('side-project-groups', sideProjectGroups);
renderCards('collab-cards', collabWorks);
renderCards('loveydovey-cards', loveydoveyWorks);
