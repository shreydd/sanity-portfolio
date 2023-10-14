import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { Writing } from "@/types/Writing";
import { Skill } from "@/types/Skill";

export async function getProjects(): Promise<Project[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            alt,
            url,
            content,
            overview
          }`
    );
}

export async function getSingleProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            alt,
            url,
            content,
            overview,
            github
          }`,
        { slug }
    );
}

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
    }`
    )
}

export async function getSinglePage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content[]
        }`,
        { slug }
    )
}

export async function getWritings(): Promise<Writing[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "writing"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            alt,
            url,
            content,
            overview
          }`
    );
}

export async function getSkills(): Promise<Skill[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "skill"]{
            _id,
            _createdAt,
            name,
            "image": image.asset->url,
            alt
        }`
    )
}