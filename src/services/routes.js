export const getGuideURL = (guide) => {
    if (!guide.slug || guide.slug.length === 0) {
        console.warn(`"${guide.title}" is missing a slug`);
        return "";
    }
    return `/guide/${guide.slug}`;
}

export const getWikiURL = (wiki) => {
    if (!wiki.slug || wiki.slug.length === 0) {
        console.warn(`"${wiki.title}" is missing a slug`);
        return "";
    }
    if (!wiki.topic || wiki.topic === "root") {
        return `/wiki/${wiki.slug}`;
    }

    return `/wiki/${wiki.topic}/${wiki.slug}`;
}