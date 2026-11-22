--
-- PostgreSQL database dump
--

\restrict szX9C2CxgXIY6bKATbHvwxINd4zCKBOaMwuTParArdDTqLNlBgrt8YFFCsdzEui

-- Dumped from database version 19.0
-- Dumped by pg_dump version 19.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Categoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Categoria" (
    id integer NOT NULL,
    nombre_categoria text NOT NULL
);


ALTER TABLE public."Categoria" OWNER TO postgres;

--
-- Name: Categoria_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Categoria_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Categoria_id_seq" OWNER TO postgres;

--
-- Name: Categoria_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Categoria_id_seq" OWNED BY public."Categoria".id;


--
-- Name: Estatus; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Estatus" (
    id integer NOT NULL,
    pedido_id integer NOT NULL,
    estado character varying(20) NOT NULL,
    usuario_id integer NOT NULL,
    fecha_cambio timestamp with time zone NOT NULL,
    notas text
);


ALTER TABLE public."Estatus" OWNER TO postgres;

--
-- Name: Estatus_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Estatus" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Estatus_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: Items_pedido; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Items_pedido" (
    id integer NOT NULL,
    pedido_id integer NOT NULL,
    producto_id integer NOT NULL,
    cantidad integer NOT NULL,
    precio_unitario numeric(10,2) NOT NULL,
    subtotal numeric(10,2) NOT NULL
);


ALTER TABLE public."Items_pedido" OWNER TO postgres;

--
-- Name: Items_pedido_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Items_pedido" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Items_pedido_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: Notificaciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Notificaciones" (
    id integer NOT NULL,
    usuario_id integer NOT NULL,
    pedido_id integer NOT NULL,
    titulo text NOT NULL,
    mensaje text NOT NULL
);


ALTER TABLE public."Notificaciones" OWNER TO postgres;

--
-- Name: Pagos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Pagos" (
    id integer NOT NULL,
    pedido_id integer NOT NULL,
    cajero_id integer NOT NULL,
    metodo_pago character varying(30) NOT NULL,
    monto numeric(10,2) NOT NULL,
    estado_pago character varying(30) NOT NULL,
    fecha_pago timestamp with time zone NOT NULL
);


ALTER TABLE public."Pagos" OWNER TO postgres;

--
-- Name: Pedidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Pedidos" (
    id integer NOT NULL,
    usuario_id integer NOT NULL,
    estado character varying(30) NOT NULL,
    subtotal numeric(10,2) NOT NULL,
    descuento numeric(10,2),
    total numeric(10,2) NOT NULL,
    notas text,
    "F_creacion" timestamp with time zone NOT NULL,
    "F_actualizacion" timestamp with time zone NOT NULL
);


ALTER TABLE public."Pedidos" OWNER TO postgres;

--
-- Name: Pedidos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Pedidos" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Pedidos_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: Productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Productos" (
    descripcion text NOT NULL,
    disponibilidad boolean NOT NULL,
    precio numeric(10,2) NOT NULL,
    id integer NOT NULL,
    categoria_id integer,
    nombre_producto text NOT NULL
);


ALTER TABLE public."Productos" OWNER TO postgres;

--
-- Name: Productos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Productos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Productos_id_seq" OWNER TO postgres;

--
-- Name: Productos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Productos_id_seq" OWNED BY public."Productos".id;


--
-- Name: Roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Roles" (
    id integer NOT NULL,
    nombre_rol character varying(50) NOT NULL,
    descripcion text
);


ALTER TABLE public."Roles" OWNER TO postgres;

--
-- Name: Roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Roles" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Roles_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: Usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Usuario" (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    email character varying(150) NOT NULL,
    psw_hash character varying(255) NOT NULL,
    tel character varying(20) NOT NULL,
    rol_id integer NOT NULL,
    activo boolean NOT NULL
);


ALTER TABLE public."Usuario" OWNER TO postgres;

--
-- Name: Usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Usuario" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Usuario_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: Categoria id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Categoria" ALTER COLUMN id SET DEFAULT nextval('public."Categoria_id_seq"'::regclass);


--
-- Name: Productos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Productos" ALTER COLUMN id SET DEFAULT nextval('public."Productos_id_seq"'::regclass);


--
-- Data for Name: Categoria; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Categoria" (id, nombre_categoria) FROM stdin;
4	bebidas
5	Alimentos
6	Postres
7	Extras
\.


--
-- Data for Name: Estatus; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Estatus" (id, pedido_id, estado, usuario_id, fecha_cambio, notas) FROM stdin;
\.


--
-- Data for Name: Items_pedido; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Items_pedido" (id, pedido_id, producto_id, cantidad, precio_unitario, subtotal) FROM stdin;
\.


--
-- Data for Name: Notificaciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Notificaciones" (id, usuario_id, pedido_id, titulo, mensaje) FROM stdin;
\.


--
-- Data for Name: Pagos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pagos" (id, pedido_id, cajero_id, metodo_pago, monto, estado_pago, fecha_pago) FROM stdin;
\.


--
-- Data for Name: Pedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pedidos" (id, usuario_id, estado, subtotal, descuento, total, notas, "F_creacion", "F_actualizacion") FROM stdin;
\.


--
-- Data for Name: Productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Productos" (descripcion, disponibilidad, precio, id, categoria_id, nombre_producto) FROM stdin;
un taco	f	10.00	9	\N	taco dorado
un atole de fresa	t	15.00	10	\N	atole
\.


--
-- Data for Name: Roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Roles" (id, nombre_rol, descripcion) FROM stdin;
\.


--
-- Data for Name: Usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Usuario" (id, nombre, apellido, email, psw_hash, tel, rol_id, activo) FROM stdin;
\.


--
-- Name: Categoria_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Categoria_id_seq"', 7, true);


--
-- Name: Estatus_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Estatus_id_seq"', 1, false);


--
-- Name: Items_pedido_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Items_pedido_id_seq"', 1, false);


--
-- Name: Pedidos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pedidos_id_seq"', 1, false);


--
-- Name: Productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Productos_id_seq"', 10, true);


--
-- Name: Roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Roles_id_seq"', 1, false);


--
-- Name: Usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Usuario_id_seq"', 1, false);


--
-- Name: Estatus Estatus_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Estatus"
    ADD CONSTRAINT "Estatus_pkey" PRIMARY KEY (id);


--
-- Name: Items_pedido Items_pedido_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Items_pedido"
    ADD CONSTRAINT "Items_pedido_pkey" PRIMARY KEY (id);


--
-- Name: Notificaciones Notificaciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notificaciones"
    ADD CONSTRAINT "Notificaciones_pkey" PRIMARY KEY (id);


--
-- Name: Productos PK_4680901d0dbc98fac6a8588cda8; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Productos"
    ADD CONSTRAINT "PK_4680901d0dbc98fac6a8588cda8" PRIMARY KEY (id);


--
-- Name: Categoria PK_62148aceba1dbfe1c5caa3493dc; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Categoria"
    ADD CONSTRAINT "PK_62148aceba1dbfe1c5caa3493dc" PRIMARY KEY (id);


--
-- Name: Pagos Pagos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pagos"
    ADD CONSTRAINT "Pagos_pkey" PRIMARY KEY (id);


--
-- Name: Pedidos Pedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedidos"
    ADD CONSTRAINT "Pedidos_pkey" PRIMARY KEY (id);


--
-- Name: Roles Roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roles"
    ADD CONSTRAINT "Roles_pkey" PRIMARY KEY (id);


--
-- Name: Usuario Usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Usuario"
    ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY (id);


--
-- Name: Productos FK_2c4365ce6fd4f9839b127cd94ec; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Productos"
    ADD CONSTRAINT "FK_2c4365ce6fd4f9839b127cd94ec" FOREIGN KEY (categoria_id) REFERENCES public."Categoria"(id);


--
-- Name: Pagos cajero_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pagos"
    ADD CONSTRAINT cajero_id FOREIGN KEY (cajero_id) REFERENCES public."Usuario"(id) NOT VALID;


--
-- Name: Estatus pedido_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Estatus"
    ADD CONSTRAINT pedido_id FOREIGN KEY (pedido_id) REFERENCES public."Pedidos"(id) NOT VALID;


--
-- Name: Items_pedido pedido_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Items_pedido"
    ADD CONSTRAINT pedido_id FOREIGN KEY (pedido_id) REFERENCES public."Pedidos"(id) NOT VALID;


--
-- Name: Notificaciones pedido_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notificaciones"
    ADD CONSTRAINT pedido_id FOREIGN KEY (pedido_id) REFERENCES public."Pedidos"(id) NOT VALID;


--
-- Name: Pagos pedido_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pagos"
    ADD CONSTRAINT pedido_id FOREIGN KEY (pedido_id) REFERENCES public."Pedidos"(id) NOT VALID;


--
-- Name: Items_pedido producto_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Items_pedido"
    ADD CONSTRAINT producto_id FOREIGN KEY (producto_id) REFERENCES public."Productos"(id) NOT VALID;


--
-- Name: Usuario rol_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Usuario"
    ADD CONSTRAINT rol_id FOREIGN KEY (rol_id) REFERENCES public."Roles"(id) NOT VALID;


--
-- Name: Estatus usuario_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Estatus"
    ADD CONSTRAINT usuario_id FOREIGN KEY (usuario_id) REFERENCES public."Usuario"(id) NOT VALID;


--
-- Name: Notificaciones usuario_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notificaciones"
    ADD CONSTRAINT usuario_id FOREIGN KEY (usuario_id) REFERENCES public."Usuario"(id) NOT VALID;


--
-- Name: Pedidos usuario_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedidos"
    ADD CONSTRAINT usuario_id FOREIGN KEY (usuario_id) REFERENCES public."Usuario"(id) NOT VALID;


--
-- PostgreSQL database dump complete
--

\unrestrict szX9C2CxgXIY6bKATbHvwxINd4zCKBOaMwuTParArdDTqLNlBgrt8YFFCsdzEui

